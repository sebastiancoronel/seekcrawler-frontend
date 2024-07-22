import Link from "next/link";

export default function Sidebar({children} ) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-10">
        {/* Page content here */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button justify-start absolute top-0 left-0 lg:hidden"
        >
          ☰
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link href={'/jobs'}>Jobs</Link>
          </li>
          <li>
            <Link href={'/charts'}>Charts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
