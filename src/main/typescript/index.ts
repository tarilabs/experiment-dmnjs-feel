import { parse, FEELParserErrorListener } from "./FEELParser";

document.getElementById("area2")?.addEventListener("input", 
function showCurrentValue(event) {
    const element = event?.target as HTMLInputElement;
    const value = element.value;
    
    const area1 = <HTMLInputElement> document.getElementById("area1");
    const area1text = area1.value;
    const values = area1text.split(/\r?\n/);

    const listener = new FEELParserErrorListener(null);
    parse(value, values, listener);

    const area3 = <HTMLInputElement> document.getElementById("area3");
    const feedback =  listener.msg.map(x=>x.getMessage()).toString();
    console.log(feedback);
    area3.value = feedback;
}
);