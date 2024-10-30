// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useAppSelector } from '../redux/hooks/hooks';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
    const user = useAppSelector((state: RootState) => state.auth.user); // স্টেট থেকে ব্যবহারকারীর তথ্য পান

    if (!user) {
        // ব্যবহারকারী লগ ইন না হলে লগইন পৃষ্ঠায় রিডাইরেক্ট করুন
        return <Navigate to="/login" replace />;
    }

    // ব্যবহারকারীর রোল অনুমোদিত কি না তা চেক করুন
    if (!allowedRoles.includes(user.role)) {
        // যদি ব্যবহারকারীর রোল অনুমোদিত না হয় তবে হোম পৃষ্ঠায় রিডাইরেক্ট করুন
        return <Navigate to="/" replace />;
    }

    // যদি ব্যবহারকারী অনুমোদিত হয় তবে চাইল্ড এলিমেন্টগুলি রেন্ডার করুন
    return <>{children}</>;
};

export default ProtectedRoute;
