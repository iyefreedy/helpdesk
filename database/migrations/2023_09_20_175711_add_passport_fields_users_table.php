<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users',  function (Blueprint $table) {
            $table->unsignedBigInteger('passport_id')->unique();
            $table->text('passport_access_token');
            $table->text('passport_refresh_token')->nullable();
            $table->string('password')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users',  function (Blueprint $table) {
            $table->dropColumn('passport_id');
            $table->dropColumn('passport_access_token');
            $table->dropColumn('passport_refresh_token');
            $table->string('password')->nullable(false)->change();
        });
    }
};
