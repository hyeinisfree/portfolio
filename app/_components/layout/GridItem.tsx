import Image from 'next/image';
import { StaticImageData } from 'next/image';

export interface ContentItem {
  index: number;
  title: string;
  artist?: string;
  director?: string;
  date: string;
  season?: string;
  vive?: string;
  category: '영화' | '음악' | '장소';
  image: StaticImageData;
}

interface GridItemProps {
  index: number;
  contentItem: ContentItem | null;
  onMouseEnter: (category: string) => void;
  onMouseLeave: () => void;
}

// 그리드 아이템 컴포넌트
export default function GridItem({
  index,
  contentItem,
  onMouseEnter,
  onMouseLeave,
}: GridItemProps) {
  if (!contentItem) {
    return (
      <div
        className="border-1 border-gray-200 border-dotted"
        aria-hidden="true"
      >
        {/* {index} */}
      </div>
    );
  }

  const { title, artist, director, date, season, category, image } =
    contentItem;

  return (
    <div className="border-1 border-gray-200 border-dotted">
      <div
        className="h-full flex flex-col justify-between pointer-events-auto z-10 p-1.5 gap-3"
        onMouseEnter={() => onMouseEnter(category)}
        onMouseLeave={onMouseLeave}
        tabIndex={0}
        role="button"
        aria-label={`${title} - ${category}`}
      >
        {/* {index}s */}
        <div className="flex justify-center items-center opacity-90 overflow-hidden">
          <Image
            src={image}
            alt={`${title} - ${category}`}
            width={300}
            height={200}
            quality={80}
            priority={index < 6} // 처음 6개 이미지만 우선적으로 로드
            loading={index < 6 ? 'eager' : 'lazy'}
            className="object-cover w-full h-full opacity-80"
          />
        </div>
        <div className="flex flex-col font-pretendard text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] font-[200]">
          <p>Title: {title}</p>
          {category === '음악' && <p>Artist: {artist}</p>}
          {category === '영화' && <p>Director: {director}</p>}
          {category === '장소' && (
            <>
              <p>Season: {season}</p>
            </>
          )}
          <p>Date: {date}</p>
        </div>
      </div>
    </div>
  );
}
