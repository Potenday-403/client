import { GiftAddType } from "@/components/gift/add-funnel/GiftAddType";
import { GiftAddFunnelContextProvider } from "@/store/gift-add-funnel";

export default function GiftsAddPage() {
  return (
    <GiftAddFunnelContextProvider>
      <GiftAddType />
    </GiftAddFunnelContextProvider>
  );
}
