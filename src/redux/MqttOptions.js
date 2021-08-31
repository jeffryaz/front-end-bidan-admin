import mqtt from "mqtt";

export const url = `ws://${"broker.emqx.io"}:${8083}/mqtt`;
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
  clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`,
  username: "emqx_test",
  password: "emqx_test",
};
export const subscription = {
  topic: "dashboard-registry",
  qos: 0,
};
export const publish = {
  topic: "dashboard-registry",
  qos: 0,
  payload: "call API",
};