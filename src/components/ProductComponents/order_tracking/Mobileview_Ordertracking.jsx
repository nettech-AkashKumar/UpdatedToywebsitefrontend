import { MapPin, CheckCircle, Truck, Clock, PackageCheck } from 'lucide-react';

export default function Mobileview_Ordertracking() {
  return (
    <div className="max-w-sm ">
      <h2 className="text-lg font-semibold">Product Tracker</h2>
      <div className='my-4'>
        <h3 className="text-md  mt-1" style={{fontSize:"18px"}}>Track your Package</h3>
      <p className="text-gray-500 text-sm mt-1 mb-5">
        Use FedEx’s real-time tracking to check your package’s current location.
      </p>
      </div>

      <div className=" space-y-4 border-l-1 border-dashed pl-4">
        {/* Order Placed */}
        <div className="relative">
          <span className="absolute -left-5 top-[-28px] bg-[#FFF4E9] text-[#7C542E] px-3 py-1.5 rounded-md text-xs flex items-center gap-1">
            <PackageCheck className="w-3 h-3 " />
            Order Placed
          </span>
          <p className="text-sm text-gray-600 pt-3 pb-5">
            Your order has been successfully submitted.
          </p>
        </div>

        {/* Processing */}
        <div className="relative">
          <span className="absolute -left-5 top-[-28px] bg-[#FFE7E0] text-[#FF8272] px-3 py-1.5 rounded-md text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Processing
          </span>
          <p className="text-sm text-gray-600 mt-5 pt-3 pb-4">
            Your package is currently being prepared.
          </p>
        </div>

        {/* Shipped */}
        <div className="relative">
          <span className="absolute -left-5 top-[-28px] bg-[#FFE7E0] text-[#FF8272] px-3 py-1.5 rounded-md text-xs flex items-center gap-1">
            <Truck className="w-3 h-3" />
            Shipped
          </span>
          <p className="text-sm text-gray-600 mt-5 pt-3 pb-4">Your package is on its way.</p>
        </div>

        {/* Delivered */}
        <div className="relative">
          <span className="absolute -left-5 top-[-28px] bg-[#E8FFF6] text-[#19A971] px-3 py-1.5 rounded-md text-xs flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Delivered
          </span>
          <p className="text-sm text-gray-600 mt-5 pt-3 pb-4">
            Your package is on the way and will arrive soon.
          </p>
        </div>
      </div>

      {/* Track Button */}
      <button className="mt-5 w-full bg-[#FF8272] text-white flex items-center justify-center py-2 rounded-md text-sm gap-2 hover:bg-red-500">
        <MapPin className="w-4 h-4" />
        Track Now
      </button>
    </div>
  );
}
