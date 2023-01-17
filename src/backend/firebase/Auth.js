import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const getToken = async () => {
  var token = await auth().currentUser?.uid;
  return token;
};

export const SignUpEmailPassword = async (email, password) => {
  let success = false;
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      success = true;
    })
    .catch((error) => {
      success = false;
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error, "error");
    });
  return success;
};
export async function SaveData(collection, doc, jsonObject) {
  let success = false;
  await firestore()
    .collection(collection)
    .doc(doc)
    .set(jsonObject, { merge: true })
    .then(() => {
      success = true;
    })
    .catch(function (error) {
      success = false;
    });
  return success;
}
export const getData = async (collection, doc) => {
  try {
    const res = await firestore().collection(collection).doc(doc).get();
    if (res.exists)
      return {
        success: true,
        exists: true,
        data: res.data(),
      };
    else return { success: true, exists: false, data: null };
  } catch (error) {
    console.log("error here " + error);
    return { success: false, message: error?.message };
  }
};
export const getAllCollectionData = async (collection) => {
  try {
    let temp = [];

    const res = await firestore().collection(collection).get();
    if (res?.docs) {
      res?.forEach((doc) => {
        temp.push(doc.data());
      });
      return {
        success: true,
        exists: true,
        data: temp,
      };
    } else return { success: true, exists: false, data: null };
  } catch (error) {
    console.log("error here " + error);
    return { success: false, message: error?.message };
  }
};

export const SignInEmailPassword = async (email, password) => {
  try {
    const result = await auth().signInWithEmailAndPassword(email, password);

    return { success: true, data: result };
  } catch (error) {
    let errMess = "Something went wrong";
    if (error.code === "auth/wrong-password") {
      errMess = "Incorrect Password";
    }
    if (error.code === "auth/user-not-found") {
      errMess = "User not Found";
    }
    return { success: false, error: errMess };
  }
};

export async function resetEmailRequest(email) {
  let success = true;
  let error = "";
  await auth()
    .sendPasswordResetEmail(email)
    .catch(function (error) {
      success = false;
      error = error;
    });
  return { success, error };
}
export async function addToArrayUpdate(collection, doc, array, value) {
  let docRef = firestore().collection(collection).doc(doc);
  let docData = await docRef.get();
  if (docData.exists && docData.data()[array] != undefined) {
    docRef.set(
      {
        [array]: firestore.FieldValue.arrayUnion(value),
      },
      { merge: true }
    );
  } else {
    docRef.set(
      {
        [array]: [value],
      },
      { merge: true }
    );
  }
}
