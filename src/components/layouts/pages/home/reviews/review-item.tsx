import type { Review } from "@/lib/types"
import { format } from "date-fns"
import { Rating } from "react-simple-star-rating"

type ReviewItemProps = {
	review: Review
}
export function ReviewItem({ review }: ReviewItemProps) {
	const { comment, createdAt, rating, user } = review
	return (
		<div className="flex min-h-40 items-center gap-2 bg-white px-4 py-4 rounded-lg shadow-sm">
			<div className="flex flex-col gap-2">
				<Rating
					style={{ display: "inline-block" }}
					allowFraction
					size={16}
					initialValue={rating}
					readonly={true}
					fillColor="#00b67a"
					className="flex"
				/>
				<div className="flex gap-2">
					<h3 className="text-base font-medium">{user.name}</h3>
					<span className="text-sm text-gray-600">{format(new Date(createdAt), "MMMM d, yyyy")}</span>
				</div>

				<p className="text-sm text-gray-600 ">{comment}</p>
			</div>
		</div>
	)
}
