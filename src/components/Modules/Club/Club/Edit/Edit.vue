<template>
    <div class="form">
        <el-form style="margin:20px;width:60%;min-width:600px;"
            label-width="100px"
            :model="club_data"
            :rules="club_rules"
            ref='club_data'>
            <el-form-item class='edit-form'
                label="俱乐部名称"
                prop='name'>

                <el-input
                    :disabled='club_data.id ? true : false'
                    v-model="club_data.name"
                    placeholder='俱乐部名称'></el-input>
            </el-form-item>

          <el-form-item class='edit-form'
                        label="经度"
                        prop='longitude'>
            <el-input
              v-model="club_data.longitude"
              placeholder='经度'></el-input>
          </el-form-item>

          <el-form-item class='edit-form'
                        label="纬度"
                        prop='latitude'>
            <el-input
              v-model="club_data.latitude"
              placeholder='纬度'></el-input>
          </el-form-item>

          <el-form-item class='edit-form'
                        label="俱乐部logo"
                        prop='logoImg'>

            <el-input
              v-model="club_data.logoImg"
              placeholder='俱乐部logo'></el-input>
          </el-form-item>

          <el-form-item class='edit-form'
                        label="地址"
                        prop='address'>

            <el-input
              v-model="club_data.address"
              placeholder='地址'></el-input>
          </el-form-item>

          <el-form-item class='edit-form'
                        label="描述"
                        prop='description'>

            <el-input
              v-model="club_data.description"
              placeholder='描述'></el-input>
          </el-form-item>

            <el-form-item>
                <el-button type="primary" @click='save_user("user_data")'>{{club_data.id ? '修改' : '添加'}}</el-button>
                <el-button type="default"
                           v-if="!club_data.id"
                           @click='reset_user("user_data")'>重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import EditJs from './Edit.js';
    module.exports=EditJs;
</script>
<style scoped>
    .edit-form{
        width:500px;
    }
</style>
