const DEV_HOST = "http://localhost:3001";

const getLabels = async (user) => {
  const url = `${DEV_HOST}/mvp/labels?admin=${user}`;
  const response = await fetch(url);
  const json = await response.json();

  return json["data"];
};

export { getLabels };
