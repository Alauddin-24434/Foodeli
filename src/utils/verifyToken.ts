import { jwtDecode, JwtPayload } from "jwt-decode";
import { User } from "../redux/features/auth/authSlice";


interface DecodedToken extends JwtPayload {
    _id: string;
    name: string;
    email: string;
    profileImage?: string;
    role: string;
}

export const verifyToken = (token: string): User => {
    const decoded = jwtDecode<DecodedToken>(token); // Decode the token

    if (!decoded.name || !decoded.email || !decoded.role || !decoded._id) {
        throw new Error("Invalid token payload");
    }

    return {
        _id: decoded._id,
        name: decoded.name,
        email: decoded.email,
        profileImage: decoded.profileImage,
        role: decoded.role,
    };
};
