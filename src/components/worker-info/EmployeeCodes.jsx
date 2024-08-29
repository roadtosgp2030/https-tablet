const EmployeeCodes = () => {
    return (
        <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Mã nhân viên</h2>
            <div className="rounded bg-gray-300 p-6">
                <ul className="px-16 py-6 bg-slate-50 grid grid-cols-2 gap-4 rounded">
                    {[
                        "N0177 - Phạm Văn Dũng",
                        "N0178 - Phạm Minh Lân",
                        "N0179 - Phạm Văn Công",
                    ].map((staff, id) => {
                        return (
                            <li
                                key={staff}
                                className={`${
                                    (id + 1) % 2 === 0 ? "justify-self-end" : ""
                                }`}
                            >
                                <span
                                    className={`py-2 px-4 bg-gray-300/80 inline-block rounded`}
                                >
                                    {staff}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default EmployeeCodes;
