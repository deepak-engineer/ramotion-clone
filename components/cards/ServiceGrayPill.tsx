export default function ServiceGrayPill({ title }: { title: string }) {
  return (
    <span
      className="
        group relative
        inline-flex
        items-center
        rounded-full
        border border-gray-300
        bg-white
        px-6
        py-2.5
        text-sm
        font-medium
        text-gray-700
        shadow-sm
        transition-all
        duration-300
        hover:border-gray-800
        hover:bg-gray-50
        hover:text-gray-900
        hover:shadow-md
      "
    >
      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>
      <span className="relative">{title}</span>
    </span>
  )
}
