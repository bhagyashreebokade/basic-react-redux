const init = { "value": "init" };

export default (state = init, action) => {

    var newObj = {};

    if (action.type === "click") {
        newObj = { "value": "something new" };
        console.log("stuff clicked...", newObj);
    }
    return newObj;
}