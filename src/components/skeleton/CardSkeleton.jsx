import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
  return (
    <section className="grid gap-8  grid-cols-3 phone:grid-cols-1 mt-4">
      {Array(6)
        .fill(0)
        .map((_, idx) => (
          <section key={idx} className="bg-white py-1 px-1.5 rounded-lg grid gap-1 items-center">
            <Skeleton height={150} />
            <div className="flex justify-between">
              <Skeleton width={30} />
              <Skeleton width={30} />
            </div>
            <Skeleton width={70} />
            <Skeleton width={40} />
          </section>
        ))}
    </section>
  );
};

export default CardSkeleton;
