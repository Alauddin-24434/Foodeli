import React, { useState } from 'react';

interface FoodInputProps {
    onCancel: () => void;
    isOpen: boolean;
}

const FoodModal: React.FC<FoodInputProps> = ({ isOpen, onCancel }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [thumbnailImage, setThumbnailImage] = useState<File | null>(null);
    const [additionalImages, setAdditionalImages] = useState<File[]>([]);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const categories = ['Burger', 'Pizza', 'Cupcake', 'Ramen','Seafood', 'IceCream','Pasta','Snacks','Desserts']; // Example categories

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors: { [key: string]: string } = {};
        if (!name) validationErrors.name = 'Name is required';
        if (!category) validationErrors.category = 'Category is required';
        if (!description) validationErrors.description = 'Description is required';
        if (price <= 0) validationErrors.price = 'Price must be greater than zero';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('price', price.toString());
        formData.append('description', description);

        if (thumbnailImage) {
            formData.append('thumbnailImage', thumbnailImage);
        }
        additionalImages.forEach((image, index) => {
            formData.append('additionalImages', image, `additional-${index}.jpg`);
        });

        try {
            const response = await fetch('http://localhost:5000/foodItem-create', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();

            if (response.ok) {
                console.log('Form submitted:', result.data);
                setName('');
                setCategory('');
                setPrice(0);
                setDescription('');
                setThumbnailImage(null);
                setAdditionalImages([]);
                setErrors({});
                onCancel()
            } else {
                console.error('Submission error:', result.message);
                setErrors({ form: result.message });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
                <h2 className="text-2xl font-semibold mb-4">Add New Food Item</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                        {errors.name && <span className="text-red-500">{errors.name}</span>}
                    </div>

                    <div className="mb-4">
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        {errors.category && <span className="text-red-500">{errors.category}</span>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="number"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full p-2 border rounded"
                        />
                        {errors.price && <span className="text-red-500">{errors.price}</span>}
                    </div>

                    <div className="mb-4">
                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                        {errors.description && <span className="text-red-500">{errors.description}</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Thumbnail Image:</label>
                        <input
                            type="file"
                            onChange={(e) => setThumbnailImage(e.target.files?.[0] || null)}
                            className="w-full p-2 border rounded"
                        />
                        {thumbnailImage && (
                            <img
                                src={URL.createObjectURL(thumbnailImage)}
                                alt="Thumbnail Preview"
                                className="mt-2 w-32 h-32 object-cover"
                            />
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Additional Images:</label>
                        <input
                            type="file"
                            multiple
                            onChange={(e) =>
                                setAdditionalImages(Array.from(e.target.files || []))
                            }
                            className="w-full p-2 border rounded"
                        />
                        <div className="flex mt-2 space-x-2">
                            {additionalImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(image)}
                                    alt={`Additional Preview ${index}`}
                                    className="w-16 h-16 object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
};

export default FoodModal;
