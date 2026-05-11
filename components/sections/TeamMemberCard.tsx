"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { TeamMember } from "@/lib/types"

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group flex flex-col gap-4">
      {/* Photo */}
      <div className="relative aspect-square rounded-xl overflow-hidden border border-border-subtle group-hover:border-crimson/40 transition-colors">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Gold corner */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-semibold text-base leading-tight group-hover:text-crimson transition-colors">
            {member.name}
          </h3>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="text-iron-500 hover:text-crimson transition-colors shrink-0 mt-0.5"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          )}
        </div>
        <p className="text-crimson text-xs font-medium uppercase tracking-wide">{member.title}</p>
        <p className="text-iron-500 text-sm leading-relaxed mt-1 line-clamp-3">{member.bio}</p>
      </div>
    </div>
  )
}
