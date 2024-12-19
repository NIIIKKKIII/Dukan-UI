import { Tabletop } from "./Tabletop";
import { OV } from "./Overview";
import { Navbar } from "./Navbar";
import { Bluecard } from "./Bluecard";
import { Secondcard } from "./Secondcard";
import { Thirdcard } from "./Thirdcard";
import { Table } from "./Table";
export function Maincontent() {
  return (
    <div className="overflow-y-auto top-0 overflow-x-hidden ml-4 bg-BGG">
      <div>
        <Navbar />
      </div>
      <div>
        <OV />
      </div>
      <div className="grid grid-cols-3 ml-40  gap-5">
        <Bluecard />
        <Secondcard />
        <Thirdcard />
        </div>
        <div className="bg-BBG rounded-b p-3 flex justify-between items-center" style={{marginLeft:"180px", width:"292px", height:"25px", color:"white", fontSize:"11px"}}>
            <div>Next payout date:</div>
            <div>Today, 04:00 PM</div>
        </div>
       <div style={{marginLeft:"180px",marginTop:"30px",fontSize:"18px"}} className="font-normal">Transactions | This Month</div>
<div style={{marginLeft:"180px"}} className="flex mt-3 gap-3">
    <div className="bg-gray rounded-3xl flex justify-center items-center" style={{width:"100px", height:"27px", fontSize:"11px", color:"gray"}}>Payouts(22)</div>
    <div className="bg-BC rounded-3xl items-center flex justify-center" style={{width:"100px", height:"27px", color:"white", fontSize:"11px"}}>Refunds(6)<div/>
    </div>

</div>
<div className="ml-44 bg-white">
<Tabletop></Tabletop>
<Table></Table>
</div>

    </div>
  );
}
