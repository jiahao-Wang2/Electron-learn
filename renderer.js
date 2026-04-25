const func = async () => {
  const res = await window.versions.ping();
  alert(res);
};

func();
