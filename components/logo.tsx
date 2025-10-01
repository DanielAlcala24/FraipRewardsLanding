import { cn } from '@/lib/utils'
import Image from "next/image";


export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/logo.png"
            alt="Logo"
            width={38}   // equivalente a size-7 (7 * 4px = 28px)
            height={38}
            className={cn("size-10 w-10", className)}
        />

    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/logo.png"
            alt="Logo"
            width={38}   // equivalente a size-7 (7 * 4px = 28px)
            height={38}
            className={cn("size-10 w-10", className)}
        />
    )
}
