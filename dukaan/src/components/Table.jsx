import { Orders } from "./data";

export function Table() {
  return (
    <div>
      <div>
        <table>
          <thead className="text-xs text-slate-600 gap-24 p-3 font-light text-nowrap">
            <th className="px-8 font-medium">ORDER ID</th>
            <th className="px-14 font-medium">STATUS</th>
            <th className="font-medium px-14">TRANSACTION ID</th>
            <th className="px-14 font-medium">REFUND DATE</th>
            <th className="font-medium px-20">ORDER AMOUNT</th>
          </thead>
          <tbody className="px-20">
            {Orders.map((order) => (
              <tr key={order.id} className="border-b-Thin border-gray">
                <td className="px-10 py-5 text-xs font-semibold text-BC">#{order.id}</td>
                <td className="px-14 text-xs flex items-center gap-2 py-4">
                    {(order.status==="Successful")&& <div className="w-2 h-2 bg-green-400 rounded-full"></div> }
                    {(order.status==="Processing") && <div className="w-2 h-2 bg-orange-300 rounded-full"></div> }
                    {(order.status==="Failed") && <div className="w-2 h-2 bg-red-600 rounded-full"></div> }{order.status}

                    </td> 
                <td className="px-14 text-xs">{order.transactionID}</td>
                <td className="px-16 text-xs text-nowrap">{order.refundDate}</td>
                <td className="px-20 text-xs">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
