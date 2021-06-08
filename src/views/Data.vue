<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 数据
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="20">
      <el-col :span="19">
        <div class="container">
          <el-table
              :data="tableData"
              border
              class="table"
              ref="multipleTable"
              header-cell-class-name="table-header"
              @row-click="aaaaa"
          >
            <el-table-column prop="md5" label="ID" width="55" align="center"></el-table-column>
            <el-table-column prop="title" label="标题" align="center"></el-table-column>
            <el-table-column prop="abstract" label="摘要" align="center"></el-table-column>
            <el-table-column prop="content" label="文章内容" align="center"></el-table-column>
            <el-table-column prop="time" label="注册时间" align="center"></el-table-column>
            <el-table-column prop="source" label="来源" align="center"></el-table-column>
            <el-table-column prop="crawl_time" label="爬取时间" align="center"></el-table-column>
            <el-table-column prop="crawl_author" label="爬取人" align="center"></el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
              background
              v-show="pageTotal > 10"
              @current-change="handleCurrentChange"
              layout="total, prev, pager, next, jumper"
              :current-page="currentPage"
              :page-size="pageSize"
              :total="pageTotal">
          </el-pagination>
          </div>

        </div>
      </el-col>
      <el-col :span="5">
        <div class="container">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {fetchData} from "../api/index";

export default {
  name: "data",
  data() {
    return {
      currentPage: 1,//当前页面
      pageSize:10,//每页10条
      pageTotal: 0,//初始条数
      tableData: [],
    };
  },
  created() {
    this.getData(this.currentPage,this.pageSize);
  },
  methods: {
    //分页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.tableData = [];
      this.currentPage = val;    //动态改变
      this.getData(this.currentPage,this.pageSize);
    },
    // 获取 easy-mock 的模拟数据
    getData() {
      fetchData(this.query).then(res => {
        console.log(res);
        this.tableData = res.list;
        this.pageTotal = res.pageTotal || 50;
        console.log(this.pageTotal)
      });
    },

    //点击跳转
    aaaaa() {
      this.$router.push({path: '/Datatails'});
    },
  }
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}

.table {
  width: 100%;
  font-size: 14px;
}

.red {
  color: #ff0000;
}

.mr10 {
  margin-right: 10px;
}

.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>
