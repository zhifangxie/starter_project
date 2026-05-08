// preview page for newly created UI components

import Skeleton from "@/components/Skeleton"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>
      <h3>Skeleton</h3>
      <div className="preview-grid">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <h3>Avatar</h3>
      <div className="preview-grid">
        <Avatar name="Alice" />
        <Avatar name="JohnDoe" />
        <Avatar name="MaryJaneLee" />
      </div>
    </div>
  )
}
