using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PlayerManagement.Migrations
{
    /// <inheritdoc />
    public partial class @new : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "EvaluationCategory",
                columns: new[] { "EvaluationCategoryId", "CategoryName" },
                values: new object[,]
                {
                    { 1, "Batting" },
                    { 2, "Bowling" },
                    { 3, "Fielding" }
                });

            migrationBuilder.InsertData(
                table: "EvaluationType",
                columns: new[] { "EvaluationTypeId", "TypeName" },
                values: new object[,]
                {
                    { 1, "Admission" },
                    { 2, "Training" },
                    { 3, "Match" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EvaluationCategory",
                keyColumn: "EvaluationCategoryId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "EvaluationCategory",
                keyColumn: "EvaluationCategoryId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "EvaluationCategory",
                keyColumn: "EvaluationCategoryId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "EvaluationType",
                keyColumn: "EvaluationTypeId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "EvaluationType",
                keyColumn: "EvaluationTypeId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "EvaluationType",
                keyColumn: "EvaluationTypeId",
                keyValue: 3);
        }
    }
}
