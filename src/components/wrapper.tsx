import { cn } from "@/lib/utils"

type WrapperProps = {
	children: React.ReactNode
	className?: string
}
export const Wrapper = ({ children, className }: WrapperProps) => {
	return <main className={cn("h-max overflow-x-hidden bg-gray-50 w-screen p-6 lg:p-16", className)}>{children}</main>
}
