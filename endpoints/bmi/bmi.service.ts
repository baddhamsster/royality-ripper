import got from "got";

function loginBMI(body: Object): got.GotPromise<any> {
    return got.post('https://miro.com/app/board/uXjVNAI2tss=/?moveToWidget=3458764573864946030&cot=14', body);
}