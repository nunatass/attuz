import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MinusIcon, PlusIcon } from "lucide-react"
import { useState } from "react"

type PlusMinusButtonProps = {
	quantity: number
	onValueChange: (value: number) => void
	className?: string
}

export function PlusMinusButton({ quantity: initialValue, onValueChange, className }: PlusMinusButtonProps) {
	const [quantity, setQuantity] = useState(initialValue)
	// handleIncrease
	const handleIncrease = () => {
		setQuantity(quantity < 20 ? quantity + 1 : 20)
		onValueChange(quantity)
	}

	// handleDecrease
	const handleDecrease = () => {
		setQuantity(quantity > 1 ? quantity - 1 : 1)
		onValueChange(quantity)
	}
	return (
		<div className={cn("flex h-11 w-28 items-center justify-between gap-1.5 px-2", className)}>
			<Button
				variant="ghost"
				size="sm"
				className="h-8 w-8 rounded-full p-0"
				onClick={handleDecrease}
				disabled={quantity === 1}
			>
				<MinusIcon className="h-4 w-4" />
			</Button>
			<span>{quantity}</span>
			<Button
				variant="ghost"
				size="sm"
				className="h-8 w-8 rounded-full p-0"
				disabled={quantity === 20}
				onClick={handleIncrease}
			>
				<PlusIcon className="h-4 w-4" />
			</Button>
		</div>
	)
}
