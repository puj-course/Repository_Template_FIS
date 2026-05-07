app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Aplicación Docker</title>
            <style>
                body {
                    margin: 0;
                    font-family: Arial, Helvetica, sans-serif;
                    background: linear-gradient(135deg, #e3f2fd, #ffffff);
                    color: #1f2937;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }

                .card {
                    background: white;
                    padding: 40px;
                    border-radius: 18px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
                    max-width: 650px;
                    text-align: center;
                }

                .badge {
                    display: inline-block;
                    background: #e0f2fe;
                    color: #0369a1;
                    padding: 8px 14px;
                    border-radius: 999px;
                    font-size: 14px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }

                h1 {
                    font-size: 34px;
                    margin-bottom: 12px;
                    color: #0f172a;
                }

                p {
                    font-size: 18px;
                    line-height: 1.6;
                    margin-bottom: 24px;
                }

                .info {
                    background: #f8fafc;
                    border-left: 5px solid #0284c7;
                    padding: 16px;
                    border-radius: 10px;
                    text-align: left;
                    font-size: 15px;
                }

                .footer {
                    margin-top: 25px;
                    font-size: 14px;
                    color: #64748b;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="badge">Docker + Node.js</div>

                <h1>Aplicación funcionando correctamente</h1>

                <p>
                    Esta aplicación Node.js se está ejecutando dentro de un contenedor Docker.
                    El puerto del contenedor fue publicado correctamente hacia el equipo local.
                </p>

                <div class="info">
                    <strong>Fundamentos de Ingeniería de Software</strong><br>
                    PUJ
                </div>

                <div class="footer">
                    Ejercicio práctico de contenerización con Docker
                </div>
            </div>
        </body>
        </html>
    `);
});
