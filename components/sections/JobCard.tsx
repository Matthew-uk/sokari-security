import Link from "next/link"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import type { Job } from "@/lib/types"

const TYPE_LABELS: Record<Job["type"], string> = {
  "full-time": "Full Time",
  contract: "Contract",
  "part-time": "Part Time",
}

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="bg-bg-surface border-border-subtle hover:border-crimson/40 transition-colors">
      <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-crimson/10 border border-crimson/30 text-crimson text-xs font-medium">
              {job.department}
            </Badge>
            <Badge variant="outline" className="border-border-subtle text-iron-500 text-xs">
              {TYPE_LABELS[job.type]}
            </Badge>
          </div>
          <h3 className="text-white font-bold text-base">{job.title}</h3>
          <div className="flex flex-wrap items-center gap-3 text-iron-500 text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {job.location}
            </span>
          </div>
        </div>
        <Link
          href={`/careers/${job.slug}`}
          className={`${buttonVariants({ variant: "outline" })} border-crimson/50 text-crimson hover:border-crimson hover:bg-crimson/5 text-sm shrink-0 group`}
        >
          View Role
          <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </CardContent>
    </Card>
  )
}
