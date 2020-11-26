exports.resCustom = (res, { status, msg, data }) => {
  if (data) return res.status(status).json({ msg, data });
  return res.status(status).json({ msg });
};

exports.customResponse = (status, msg, data) => ({ status, msg, data });
