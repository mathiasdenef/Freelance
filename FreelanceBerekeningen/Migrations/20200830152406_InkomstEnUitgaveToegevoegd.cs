using Microsoft.EntityFrameworkCore.Migrations;

namespace FreelanceBerekeningen.Migrations
{
    public partial class InkomstEnUitgaveToegevoegd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Inkomst",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Amount = table.Column<decimal>(nullable: false),
                    SimulatieId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inkomst", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Inkomst_Simulatie_SimulatieId",
                        column: x => x.SimulatieId,
                        principalTable: "Simulatie",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Uitgave",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Amount = table.Column<decimal>(nullable: false),
                    FiscaalAftrekbaar = table.Column<int>(nullable: false),
                    SimulatieId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Uitgave", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Uitgave_Simulatie_SimulatieId",
                        column: x => x.SimulatieId,
                        principalTable: "Simulatie",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Inkomst_SimulatieId",
                table: "Inkomst",
                column: "SimulatieId");

            migrationBuilder.CreateIndex(
                name: "IX_Uitgave_SimulatieId",
                table: "Uitgave",
                column: "SimulatieId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Inkomst");

            migrationBuilder.DropTable(
                name: "Uitgave");
        }
    }
}
