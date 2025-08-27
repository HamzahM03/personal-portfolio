import type { PropsWithChildren } from "react"

type Props = PropsWithChildren<{ id: string; className?: string }>
export default function Section({ id, className, children }: Props) {
  return (
    <section id={id} className={`scroll-mt-28 ${className || ""}`}>
      {children}
    </section>
  )
}
