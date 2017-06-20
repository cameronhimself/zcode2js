function zcode2js(buffer) {
  return "processBase64Zcode('" + buffer.toString('base64') + "');";
}

module.exports = zcode2js;
