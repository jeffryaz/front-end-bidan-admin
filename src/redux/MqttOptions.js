export const url = `mqtts://${"mqtt.ayaklinik.id"}`;
// export const url = `mqtt://${"localhost:1883"}`;
export const options = {
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
  clientId: `mqttjs_ayaklinik_${Math.random().toString(16).substr(2, 8)}`,
  username: "ayaklinik",
  password: "ayaklinik",
};
export const subscription = {
  topic: "dashboard-registry",
  qos: 0,
};
export const subscriptionPatient = {
  topicCallPatient: "call-patient",
  qosCallPatient: 0,
};
export const subscriptionDoctor = {
  topicCallDoctor: "call-patient-by-doctor",
  qosCallDoctor: 0,
};
export const subscriptionSpecialCase = {
  topicCallSpecialCase: "call-special-case",
  qosCallSpecialCase: 0,
};
export const publish = {
  topic: "dashboard-registry",
  qos: 0,
  payload: "call API",
};
export const callPatient = {
  topicCallPatient: "call-patient",
  qosCallPatient: 0,
  payloadCallPatient: "call API",
};
export const callDoctor = {
  topicCallDoctor: "call-patient-by-doctor",
  qosCallDoctor: 0,
  payloadCallDoctor: "call API",
};
export const callSpecialCase = {
  topicCallSpecialCase: "call-special-case",
  qosCallSpecialCase: 0,
  payloadCallSpecialCase: "call API",
};
