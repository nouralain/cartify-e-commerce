import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white md:bg-[#eaeded] py-0 md:py-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white md:shadow-sm rounded-sm md:border border-gray-200 overflow-hidden">
        
        {/* Contact Form side */}
        <div className="w-full md:w-2/3 p-6 md:p-10">
          <h1 className="text-2xl font-bold text-[#0f1111] mb-2">Contact Us</h1>
          <p className="text-sm text-[#565959] mb-8">We're here to help! Please fill out the form below and we will get back to you within 24 hours.</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-[#0f1111]">First Name</label>
                <Input placeholder="John" className="focus-visible:ring-[#ff9900]" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-[#0f1111]">Last Name</label>
                <Input placeholder="Doe" className="focus-visible:ring-[#ff9900]" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-bold text-[#0f1111]">Email Address</label>
              <Input type="email" placeholder="john.doe@example.com" className="focus-visible:ring-[#ff9900]" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-[#0f1111]">Order Number (Optional)</label>
              <Input placeholder="123-1234567-1234567" className="focus-visible:ring-[#ff9900]" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-bold text-[#0f1111]">How can we help you?</label>
              <textarea 
                className="w-full min-h-[120px] rounded-sm border border-input px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9900] shadow-sm"
                placeholder="Describe your issue or question here..."
              ></textarea>
            </div>
            
            <Button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] rounded-lg border border-[#FCD200]/50 font-medium shadow-sm h-9 mt-4">
              Submit Message
            </Button>
          </form>
        </div>

        {/* Info side (Sidebar) */}
        <div className="w-full md:w-1/3 bg-[#f3f3f3] md:border-l border-gray-200 p-6 md:p-10 flex flex-col text-sm border-t md:border-t-0">
          <h2 className="font-bold text-base mb-6 text-[#0f1111]">Other Ways to Contact Us</h2>
          
          <div className="space-y-6 flex-grow">
            <div>
              <h3 className="font-bold text-[#0f1111]">Customer Service Hours</h3>
              <p className="text-[#565959] mt-1 leading-snug">Available 24/7 constantly rotating support to aid you anywhere anytime.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#0f1111]">Call Us Directly</h3>
              <p className="text-[#007185] mt-1 hover:underline cursor-pointer hover:text-[#c45500]">1-800-123-4567</p>
            </div>

             <div>
              <h3 className="font-bold text-[#0f1111]">Mailing Address</h3>
              <p className="text-[#565959] mt-1 leading-snug">410 Terry Ave. North<br/>Seattle, WA 98109-5210</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
