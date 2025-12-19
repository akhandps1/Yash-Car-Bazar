interface SpecsTableProps {
  specs: {
    brand: string
    model: string
    year: number
    fuel: string
    transmission: string
    km: string
    ownership: string
  }
}

export function SpecsTable({ specs }: SpecsTableProps) {
  const rows = [
    { label: "Brand", value: specs.brand },
    { label: "Model", value: specs.model },
    { label: "Year", value: specs.year },
    { label: "Fuel Type", value: specs.fuel },
    { label: "Transmission", value: specs.transmission },
    { label: "Kilometers Driven", value: `${specs.km} km` },
    { label: "Ownership", value: specs.ownership },
    { label: "Location", value: "Gorakhpur, Uttar Pradesh" },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900">Car Specifications</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {rows.map((row, index) => (
          <div key={index} className="grid grid-cols-2 px-6 py-4">
            <div className="text-gray-600 font-medium">{row.label}</div>
            <div className="text-gray-900 font-semibold">{row.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
