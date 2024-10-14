// Кастомная генерация токенов
export const generateTokens = (userId, name) => {
  const accessTokenPayload = {
    sub: userId,
    name: name,
    exp: Math.floor(Date.now() / 1000) + 15 * 60, // 15 минут
  };

  const refreshTokenPayload = {
    sub: userId,
    name: name,
    exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60, // 7 дней
  };

  const accessToken = btoa(JSON.stringify(accessTokenPayload));
  const refreshToken = btoa(JSON.stringify(refreshTokenPayload));

  // Время истечения access токена в миллисекундах
  const accessTokenExpires = (Date.now() + 15 * 60 * 1000).toString();

  return {
    access_token: accessToken,
    refresh_token: refreshToken,
    access_token_expires: accessTokenExpires,
  };
};
