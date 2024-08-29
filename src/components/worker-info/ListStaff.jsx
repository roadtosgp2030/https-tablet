import xIcon from "../../assets/icons/x-icon.svg";

const ListStaff = ({selectedStaffs, removeStaff}) => {
  return (
    <>
        {selectedStaffs.length > 0 && (
            <div className="bg-gray-100 rounded px-16 mt-4 py-6 grid grid-cols-2 gap-4 mb-auto">
                {selectedStaffs.map((staff) => (
                    <div key={staff.id}>
                        <div className="py-2 px-4 rounded bg-gray-300 inline-flex items-center gap-4">
                            <span>{staff.id} - {staff.name}</span>
                            <button onClick={() => removeStaff(staff.id)}>
                                <img src={xIcon} alt="x icon" className="w-3"/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </>
  )
}

export default ListStaff