const formValidation = {}
const fileSizeLimit = 1 * 1000 * 1000;
import { regularExpData } from "../formdata"
import { commons } from "../commons"


formValidation.validatelogin = async (obj) => {

    obj.map(item => {
        if (item.value != undefined && item.value != null && item.type !== "number" && item.value.toString().length) {
            item.value = (typeof (item["value"]) == "string") ? item["value"].trim() : item["value"]

        }
        let value = item["value"];

        if (item.type == "number" && item.value.toString().length > 0) item.value = parseInt(value)
        if (item.type == "checkbox" && item.value.toString().length == 0) item.value = 0




        item.error = ""
        if (item.required) {

            if (item.value == undefined ||
                (item.value != undefined && item.value.toString().length === 0)
            ) {
                item["error"] = item.displayName + " required";
            }

            else {
                item["error"] = ""
            }
        }



        let fieldObj = regularExpData.find(obj => obj.name ? obj.name === item["key"] : "")


        if (fieldObj && fieldObj.regExp) {

            if (value != undefined && value.toString().length > 0
                //&& (item.type === "number" && item.value != 0)

            ) {
                let status = fieldObj.regExp.test(value) ? true : false;
                if (status) {
                    item["error"] = "";

                }
                else
                    item['error'] = fieldObj.message;
            }

        }

        // else if (fieldObj === undefined)
        // {
        //     item["error"] = "";
        //     }

    })




    return obj;
}




export default formValidation;