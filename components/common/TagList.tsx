import { GoldBadge } from "./GoldBadge"

interface TagListProps {
  tags: string[]
}

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2" role="list" aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag}>
          <GoldBadge>{tag}</GoldBadge>
        </li>
      ))}
    </ul>
  )
}
