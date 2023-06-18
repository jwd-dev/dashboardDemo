const DEV_HOST = "http://localhost:3001";

const getLabels = async (admin) => {
  const url = `${DEV_HOST}/mvp/labels?admin=${admin}`;
  const response = await fetch(url);
  const json = await response.json();

  return json["data"];
};

const addBlobPathToLabels = async (admin, label, paths, method = "PUT") => {
  const url = `${DEV_HOST}/mvp/labels`;
  const body = {
    admin,
    label,
    blob_paths: paths,
  };

  const response = await fetch(url, {
    method,
    body,
  });

  const json = await response.json();

  return json;
};

// http://localhost:3001/mvp/score?blob_path=aman_1.wav&admin=amanmibra@gmail.com&label=aman
const score = async (admin, label, path) => {
  const url = `${DEV_HOST}/mvp/score?admin=${admin}&label=${label}&blob_path=${path}`;

  const response = await fetch(url);
  const json = await response.json();

  return json["data"];
};

export { getLabels, addBlobPathToLabels };
