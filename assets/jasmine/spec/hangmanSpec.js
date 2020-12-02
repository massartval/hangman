describe("StartGame", () => {
  it("should launch a new game", () => {
    // should test that StartGame() is called
    // something like : expect(Spy-StartGame).toHaveBeenCalledOnceWith(??)
    // https://stackoverflow.com/questions/29945075/how-would-i-test-window-prompts-and-confirms-with-karma-jasmine
  });

  describe("chooseSecretWord", () => {
    it("should allow user to enter a secret word via a prompt", () => {
      setSecretWord();
      expect(secretWord).toBeDefined();
    });
  });

  describe("validateSecretWord", () => {
    //let validWord = validateSecretWord();
    it("should validate an input between 1 and 50 characters", () => {
      secretWord = "secret";
      expect(validWord).toBeTrue();
      secretWord = "CharactersCharactersCharactersCharactersCharacters"; // 50 characters
      expect(validWord).toBeTrue();
    });
    it("should not validate a word smaller than 1 character or greater than 50 characters", () => {
      secretWord = "";
      expect(validWord).toBeFalse();
      secretWord = "CharactersCharactersCharactersCharactersCharactersCharacters"; // 60 characters
      expect(validWord).toBeFalse();
    });
    it("should validate a word comprised of letters and '-' only", () => {
      // https://stackoverflow.com/questions/16667329/special-character-validation
      secretWord = "secret";
      validateSecretWord();
      expect(validWord).toBeTrue();
      secretWord = "by-pass";
      validateSecretWord();
      expect(validWord).toBeTrue();
    });
    it("should not validate a word containing some other character", () => {
      secretWord = "by pass";
      expect(validWord).toBeFalse();
    });
    it("should throw an error if the word is not valid", () => {
      if (validWord === false) {
        // something like : expect(??).toThrowError()
        // https://stackoverflow.com/questions/21221697/using-tothrowerror-in-jasmine
      }
    });
    it("should send an alert if the word is valid", () => {
      expect();
    });
  });
  describe("formatSecretWord", () => {
    it("should ignore caps", () => {
      secretWord = "SECRET";
      formatSecretWord();
      expect(secretWord).toEqual("secret");
    });
  });
});
