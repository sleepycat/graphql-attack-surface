const { attackSurface } = require('../attackSurface')

describe('attackSurface', () => {
  it('returns string inputs from the schema', async () => {
    const stringFields = await attackSurface('./src/__tests__/schema.json')
    expect(stringFields).toEqual({
      allUsers: [
        {
          before: 'String',
        },
        {
          after: 'String',
        },
      ],
      authenticateTwoFactor: [
        {
          otpCode: 'String!',
        },
      ],
      createUser: [
        {
          confirmPassword: 'String!',
        },
        {
          password: 'String!',
        },
        {
          username: 'String!',
        },
      ],
      signIn: [
        {
          password: 'String!',
        },
      ],
      testUserClaims: [
        {
          token: 'String!',
        },
      ],
      updatePassword: [
        {
          confirmPassword: 'String!',
        },
        {
          password: 'String!',
        },
      ],
      updateUserRole: [
        {
          role: 'String!',
        },
        {
          token: 'String!',
        },
      ],
    })
  })
})
