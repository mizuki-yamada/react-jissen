import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();
// admin権限でfirestoreを使いたい。よく使うので定数に入れておく。メモリ確保の意味。

const sendResponse = (
  response: functions.Response,
  statusCode: number,
  body: any,
) => {
  response.send({
    statusCode,
    body: JSON.stringify(body),
  });
};

export const addDataset = functions.https.onRequest(
  async (req: any, res: any) => {
    if (req.method !== "POST") {
      sendResponse(res, 405, {error: "invalid request"});
    } else {
      const dataset = req.body;
      for (const key of Object.keys(dataset)) {
        const data = dataset[key];
        await db.collection("questions").doc(key).set(data);
      }
      sendResponse(res, 200, {message: "successfully added dataset"});
    }
  }
);
