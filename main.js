const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [Menu, Game, Pausa, Opciones, Controles, Carga] // 👈 Escena de menú primero
};

const game = new Phaser.Game(config);
