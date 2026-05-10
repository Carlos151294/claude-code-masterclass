// preview page for newly created UI components

import Skeleton from "@/components/Skeleton"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>
      <section>
        <h3>Avatar</h3>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", alignItems: "center" }}>
          <Avatar name="carlos" />
          <Avatar name="John" />
          <Avatar name="CarlosNava" />
          <Avatar name="PascalCase" />
        </div>
      </section>
      <section style={{ marginTop: "2rem" }}>
        <h3>Skeleton</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </section>
    </div>
  )
}
