let t = (t, e) => async () => {
        let i = await t();
        return i[e];
    },
    e = () =>
    import ("./E1DkniVB9-4.js"),
    i = [t(e, "richText"), t(e, "richText1"), t(e, "richText2")];
export async function resolveRichTextSk(t) {
    let e = i[t];
    if (e) return await e();
}
export const __FramerMetadata__ = {
    "exports": {
        "resolveRichTextSk": {
            "type": "function",
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "__FramerMetadata__": {
            "type": "variable"
        }
    }
}