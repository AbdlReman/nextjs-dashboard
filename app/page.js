import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
      <div class="flex items-center justify-center bg-[#151C2D] min-h-screen w-full">
        <Link
          href="dashboard"
          class="bg-[#2E374A] text-white font-medium  p-2 w-60 h-50 flex items-center justify-center rounded hover:opacity-90 transition-opacity"
        >
          Dashboard
        </Link>
      </div>
    </>
  );
}

export default page