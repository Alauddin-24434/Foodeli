import React, { useState } from 'react';
import uploadImageToCloud from '../../../utils/imageUploadCloudinary';

interface ImageUploadProps {
  label: string;
  onImageUpload: (url: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label, onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setLoading(true);

      try {
        const url = await uploadImageToCloud(file);
        onImageUpload(url); // Pass the uploaded URL to the parent component
      } catch (error) {
        console.error("Image upload failed:", error);
      } finally {
        setLoading(false); // Reset loading state
      }
    }
  };

  return (
    <div className="mb-4">
      <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
        {label}
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full cursor-pointer appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:shadow"
      />
      {preview && (
        <div className="mt-4">
          <img src={preview} alt="Image Preview" className="w-32 h-32 rounded-md object-cover" />
        </div>
      )}
      {loading && <p className="text-sm text-gray-500">Uploading...</p>}
    </div>
  );
};

export default ImageUpload;
