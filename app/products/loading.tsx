// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="container w-full">
      {/* <Skeleton height={100}></Skeleton> */}
      <p>Loading</p>
    </div>
  );
}
