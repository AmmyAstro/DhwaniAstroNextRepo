export function SkeletonText() {
  return (
    <div className="space-y-2 animate-pulse">
      <div className="h-3 bg-gray-300 rounded w-full" />
      <div className="h-3 bg-gray-300 rounded w-[90%]" />
      <div className="h-3 bg-gray-300 rounded w-[80%]" />
    </div>
  );
}
