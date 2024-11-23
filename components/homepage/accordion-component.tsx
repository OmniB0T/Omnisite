import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TITLE_TAILWIND_CLASS } from "@/utils/constants"

export function AccordionComponent() {
    return (
        <div className="flex flex-col w-[70%] lg:w-[50%]">
            <h2 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold text-center tracking-tight dark:text-white text-gray-900`}>
                Frequently Asked Questions (FAQs)
            </h2>
            <Accordion type="single" collapsible className="w-full mt-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger><span className="font-medium">Do I get access to this for free?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>Yes, Omnibot is totally free to use</p>
                    </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                    <AccordionTrigger><span className="font-medium">Why isn’t the model loading?</span></AccordionTrigger>
                    <AccordionContent>
                        <p> Ensure that your browser supports WebGPU. For older devices, WebGL compatibility is required.</p>
                    </AccordionContent>
                </AccordionItem>
            

                <AccordionItem value="item-3">
                    <AccordionTrigger><span className="font-medium">How do I know if my device supports WebGL?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>You can check compatibility by clicking <a href="https://gist.github.com/TimvanScherpenzeel/f8efeeb1dbed38a5c5dc0c29768a0413"><b>here</b></a></p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
