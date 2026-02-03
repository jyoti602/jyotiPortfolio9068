import { X } from 'lucide-react'

export default function ImageModal({ imageSrc, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <img className="modal__img" src={imageSrc} alt="Certificate" />
        <button className="modal__close" type="button" onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>
      </div>
    </div>
  )
}
